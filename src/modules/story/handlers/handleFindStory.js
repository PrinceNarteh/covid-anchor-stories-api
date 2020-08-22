const Story = require("../dbSchema");

/**
 * This is a handler for finding a story
 * @param {*} req
 * @param {*} res
 */
const handleFindStory = async (req, res) => {
  const { id } = req.params;
  const stories = await Story.findById(id);

  // Sending Story
  res.status(200).json({
    data: stories,
    error: { code: null, message: null },
  });
};

module.exports = handleFindStory;
