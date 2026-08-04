import Gallery from '../models/Gallery.js';

// @desc    Get all gallery items
// @route   GET /api/gallery
// @access  Public
export const getGalleryItems = async (req, res) => {
  try {
    const { category, isActive } = req.query;
    
    let query = {};
    
    if (category) query.category = category;
    if (isActive !== undefined) query.isActive = isActive === 'true';

    const galleryItems = await Gallery.find(query)
      .populate('uploadedBy', 'name email')
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: galleryItems.length,
      gallery: galleryItems,
    });
  } catch (error) {
    console.error('Get gallery items error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get single gallery item
// @route   GET /api/gallery/:id
// @access  Public
export const getGalleryItem = async (req, res) => {
  try {
    const galleryItem = await Gallery.findById(req.params.id)
      .populate('uploadedBy', 'name email');

    if (!galleryItem) {
      return res.status(404).json({ message: 'Gallery item not found' });
    }

    res.json({
      success: true,
      galleryItem,
    });
  } catch (error) {
    console.error('Get gallery item error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Create new gallery item
// @route   POST /api/gallery
// @access  Private/Admin
export const createGalleryItem = async (req, res) => {
  try {
    const galleryItem = await Gallery.create({
      ...req.body,
      uploadedBy: req.user.id,
    });

    res.status(201).json({
      success: true,
      galleryItem,
    });
  } catch (error) {
    console.error('Create gallery item error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Update gallery item
// @route   PUT /api/gallery/:id
// @access  Private/Admin
export const updateGalleryItem = async (req, res) => {
  try {
    const galleryItem = await Gallery.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!galleryItem) {
      return res.status(404).json({ message: 'Gallery item not found' });
    }

    res.json({
      success: true,
      galleryItem,
    });
  } catch (error) {
    console.error('Update gallery item error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Delete gallery item
// @route   DELETE /api/gallery/:id
// @access  Private/Admin
export const deleteGalleryItem = async (req, res) => {
  try {
    const galleryItem = await Gallery.findByIdAndDelete(req.params.id);

    if (!galleryItem) {
      return res.status(404).json({ message: 'Gallery item not found' });
    }

    res.json({
      success: true,
      message: 'Gallery item deleted successfully',
    });
  } catch (error) {
    console.error('Delete gallery item error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
