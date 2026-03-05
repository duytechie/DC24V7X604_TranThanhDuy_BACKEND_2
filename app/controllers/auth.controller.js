import ApiError from "../api-error.js";

export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body ?? {};

    if (!username || !password) {
      return next(new ApiError(400, "Username and password are required"));
    }

    if (username !== process.env.TEST_USERNAME || password !== process.env.TEST_PASSWORD) {
      return next(new ApiError(401, "Invalid username or password"));
    }

    return res.send({
      message: "Login successful",
      user: { username },
      token: "demo-token",
    });
  } catch (error) {
    return next(new ApiError(500, "An error occurred while processing login"));
  }
};
