const [] = require("../../shared/sterilize");

const isString = (data) => data && typeof data === "string";

// Validate
const validateStory = (unvalidateStory) => {
  let errMgs = "";
  let data = sterilizeMany(unvalidateStory);

  if (!isString(data.title)) errMgs += "Title is required. ";
  if (!isString(data.content)) errMgs += "Content is required. ";
  if (isString(data.image)) errMgs += "Image must be alpha-numeric. ";

  // Prepare validate
  return { data, isValid: errMgs.length < 1, message: errMgs };
};

// Create a new story
const createStory = (unvalidateStory) => {
  // Validate Story
  const { data, isValid, message } = validateStory(unvalidateStory);

  // Check if data is valid
  if (isValid) {
    return {
      tag: "passed",
      data: {
        title: data.title,
        content: data.content,
        image: data.image,
        views: [],
        createdAt: new Date(),
        updateAt: null,
      },
    };
  }

  // Return Story
  return { tag: "failed", message };
};

module.exports = createStory;
