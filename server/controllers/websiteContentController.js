import WebsiteContent from '../models/WebsiteContent.js';

// @desc    Get all website content
// @route   GET /api/website-content
// @access  Public
export const getAllContent = async (req, res) => {
  try {
    const { section, isActive } = req.query;
    
    let query = {};
    
    if (section) query.section = section;
    if (isActive !== undefined) query.isActive = isActive === 'true';

    const content = await WebsiteContent.find(query)
      .populate('lastUpdatedBy', 'name email')
      .sort({ section: 1, key: 1 });

    res.json({
      success: true,
      count: content.length,
      content,
    });
  } catch (error) {
    console.error('Get all content error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get content by key
// @route   GET /api/website-content/:key
// @access  Public
export const getContentByKey = async (req, res) => {
  try {
    const content = await WebsiteContent.findOne({ key: req.params.key });

    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }

    res.json({
      success: true,
      content,
    });
  } catch (error) {
    console.error('Get content by key error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Create website content
// @route   POST /api/website-content
// @access  Private/Admin
export const createContent = async (req, res) => {
  try {
    const content = await WebsiteContent.create({
      ...req.body,
      lastUpdatedBy: req.user.id,
    });

    res.status(201).json({
      success: true,
      content,
    });
  } catch (error) {
    console.error('Create content error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Update website content
// @route   PUT /api/website-content/:id
// @access  Private/Admin
export const updateContent = async (req, res) => {
  try {
    const content = await WebsiteContent.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        lastUpdatedBy: req.user.id,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }

    res.json({
      success: true,
      content,
    });
  } catch (error) {
    console.error('Update content error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Delete website content
// @route   DELETE /api/website-content/:id
// @access  Private/Admin
export const deleteContent = async (req, res) => {
  try {
    const content = await WebsiteContent.findByIdAndDelete(req.params.id);

    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }

    res.json({
      success: true,
      message: 'Content deleted successfully',
    });
  } catch (error) {
    console.error('Delete content error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
