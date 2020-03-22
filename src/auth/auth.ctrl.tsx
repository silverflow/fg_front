import Joi from "joi";
import User from "../models/user";

// 회원가입
export const register = async (ctx: any) => {
	// Request Body 검증하기
	const schema = Joi.object().keys({
		username: Joi.string()
			.alphanum()
			.min(3)
			.max(20)
			.required(),
		password: Joi.string().required()
	});
	const result = Joi.validate(ctx.request.body, schema);
	if (result.error) {
		ctx.status = 400;
		ctx.body = result.error;
		return;
	}

	const { username, password } = ctx.request.body;
	try {
		// username이 이미 존재하는지 확인
		const exists = await User.findUser(username);
		if (exists) {
			ctx.status = 409; // conflixt
			return;
		}
	}
};

export const login = async (ctx: any) => {
	// 로그인
};

export const check = async (ctx: any) => {
	// 로그인 상태 확인
};

export const logout = async (ctx: any) => {
	// 로그아웃
};
