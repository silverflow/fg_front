import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema({
	username: String,
	hashedPassword: String,
	point: Int16Array,
	code: String,
	invitedBy: String
});

UserSchema.methods.setPassword = async function(password: String) {
	const hash = await bcrypt.hash(password, 10);
	this.hashedPassword = hash;
};

UserSchema.methods.methods.checkPassword = async function(password: String) {
	const result = await bcrypt.compare(password, this.hashedPassword);
	return result; // true or false
};

UserSchema.statics.findUser = function(username: String) {
	return this.findOne({ username });
};

const User = mongoose.model("User", UserSchema);
export default User;
