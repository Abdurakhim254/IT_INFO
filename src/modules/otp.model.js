import mongoose from "mongoose";

const otpschema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    otp_code: {
      type: String,
      required: true,
    },
    expires_at: {
      type: Date,
      default: new Date(Date.now() + 60 * 15 * 1000),
    },
  },
  {
    timestamps: true,
  }
);

otpschema.method("verify", function (userOtp) {
  return userOtp == this.otp_code;
});

export const OTP = mongoose.model("otp", otpschema);
