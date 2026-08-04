import Inquiry from '../models/Inquiry.js';

// @desc    Get all inquiries
// @route   GET /api/inquiries
// @access  Private/Admin
export const getInquiries = async (req, res) => {
  try {
    const { status, priority, source, search } = req.query;
    
    let query = {};
    
    if (status) query.status = status;
    if (priority) query.priority = priority;
    if (source) query.source = source;
    
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { phone: { $regex: search, $options: 'i' } },
        { courseName: { $regex: search, $options: 'i' } },
      ];
    }

    const inquiries = await Inquiry.find(query)
      .populate('assignedTo', 'name email')
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: inquiries.length,
      inquiries,
    });
  } catch (error) {
    console.error('Get inquiries error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get single inquiry
// @route   GET /api/inquiries/:id
// @access  Private/Admin
export const getInquiry = async (req, res) => {
  try {
    const inquiry = await Inquiry.findById(req.params.id)
      .populate('assignedTo', 'name email');

    if (!inquiry) {
      return res.status(404).json({ message: 'Inquiry not found' });
    }

    res.json({
      success: true,
      inquiry,
    });
  } catch (error) {
    console.error('Get inquiry error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Create new inquiry
// @route   POST /api/inquiries
// @access  Public
export const createInquiry = async (req, res) => {
  try {
    const inquiry = await Inquiry.create(req.body);

    res.status(201).json({
      success: true,
      inquiry,
    });
  } catch (error) {
    console.error('Create inquiry error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Update inquiry
// @route   PUT /api/inquiries/:id
// @access  Private/Admin
export const updateInquiry = async (req, res) => {
  try {
    const inquiry = await Inquiry.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!inquiry) {
      return res.status(404).json({ message: 'Inquiry not found' });
    }

    res.json({
      success: true,
      inquiry,
    });
  } catch (error) {
    console.error('Update inquiry error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Delete inquiry
// @route   DELETE /api/inquiries/:id
// @access  Private/Admin
export const deleteInquiry = async (req, res) => {
  try {
    const inquiry = await Inquiry.findByIdAndDelete(req.params.id);

    if (!inquiry) {
      return res.status(404).json({ message: 'Inquiry not found' });
    }

    res.json({
      success: true,
      message: 'Inquiry deleted successfully',
    });
  } catch (error) {
    console.error('Delete inquiry error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Add contact history to inquiry
// @route   POST /api/inquiries/:id/contact
// @access  Private/Admin
export const addContactHistory = async (req, res) => {
  try {
    const inquiry = await Inquiry.findById(req.params.id);

    if (!inquiry) {
      return res.status(404).json({ message: 'Inquiry not found' });
    }

    const { mode, notes, contactedBy } = req.body;

    inquiry.contactHistory.push({
      mode,
      notes,
      contactedBy,
      date: new Date(),
    });

    await inquiry.save();

    res.json({
      success: true,
      inquiry,
    });
  } catch (error) {
    console.error('Add contact history error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
