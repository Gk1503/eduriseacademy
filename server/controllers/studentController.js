import Student from '../models/Student.js';

// @desc    Get all students
// @route   GET /api/students
// @access  Private/Admin
export const getStudents = async (req, res) => {
  try {
    const { status, course, search } = req.query;
    
    let query = {};
    
    if (status) query.status = status;
    if (course) query.course = course;
    
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { phone: { $regex: search, $options: 'i' } },
      ];
    }

    const students = await Student.find(query)
      .populate('course', 'title')
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: students.length,
      students,
    });
  } catch (error) {
    console.error('Get students error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get single student
// @route   GET /api/students/:id
// @access  Private/Admin
export const getStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id).populate('course', 'title price');

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json({
      success: true,
      student,
    });
  } catch (error) {
    console.error('Get student error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Create new student
// @route   POST /api/students
// @access  Private/Admin
export const createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);

    res.status(201).json({
      success: true,
      student,
    });
  } catch (error) {
    console.error('Create student error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Update student
// @route   PUT /api/students/:id
// @access  Private/Admin
export const updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json({
      success: true,
      student,
    });
  } catch (error) {
    console.error('Update student error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Delete student
// @route   DELETE /api/students/:id
// @access  Private/Admin
export const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json({
      success: true,
      message: 'Student deleted successfully',
    });
  } catch (error) {
    console.error('Delete student error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Add payment to student
// @route   POST /api/students/:id/payments
// @access  Private/Admin
export const addPayment = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    const { amount, mode, receiptNumber, notes } = req.body;

    student.paymentHistory.push({
      amount,
      mode,
      receiptNumber,
      notes,
      date: new Date(),
    });

    student.feesPaid += amount;
    student.feesRemaining = student.feesTotal - student.feesPaid;

    await student.save();

    res.json({
      success: true,
      student,
    });
  } catch (error) {
    console.error('Add payment error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
