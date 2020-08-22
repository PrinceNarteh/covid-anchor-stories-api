const Story = require("../dbSchema");

/**
 * This is a handler for deleting a story
 * @param {*} req
 * @param {*} res
 */
const handleFindStory = async (req, res) => {
  const { id } = req.params;
  const deleteDstory = await Story.findByIdAndDelete(id);

  // Sending Story
  res.status(200).json({
    data: deleteDstory,
    error: { code: null, message: null },
  });
};

module.exports = handleFindStory;
