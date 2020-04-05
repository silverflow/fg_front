import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{"Copyright © "}
			<Link color="inherit" href="https://fg.metafor.kr/">
				플갤 앞마당
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const useStyles = makeStyles(theme => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(3)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	}
}));

export default function SignUp() {
	const classes = useStyles();
	const [id, setId] = useState("");
	const [nick, setNick] = useState("");
	const [password, setPassword] = useState("");
	const [passwordCheck, setPasswordCheck] = useState("");
	const [term, setTerm] = useState(false);
	const [passwordError, setPasswordError] = useState(false);
	const [termError, setTermError] = useState(false);

	const onSubmit = (e: any) => {
		e.preventDefault();
		/**검증 로직 만들기
		 * 1. 비밀번호와 비밀번호 체크가 다를 경우를 검증한다
		 * 2. 약관 동의를 확인한다.
		 */
		if (password !== passwordCheck) {
			return setPasswordError(true);
		}
		if (!term) {
			return setTermError(true);
		}
		console.log({
			id,
			nick,
			password,
			passwordCheck,
			term
		});
	};
	const onChangeId = (e: any) => {
		setId(e.target.value);
	};
	const onChangeNick = (e: any) => {
		setNick(e.target.value);
	};
	const onChangePassword = (e: any) => {
		setPassword(e.target.value);
	};
	const onChangePasswordChk = (e: any) => {
		//비밀번호를 입력할때마다 password 를 검증하는 함수
		setPasswordError(e.target.value !== password);
		setPasswordCheck(e.target.value);
	};
	const onChangeTerm = (e: any) => {
		//체크박스 초기화
		setTermError(false);
		setTerm(e.target.checked);
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					플갤러 인증받기
				</Typography>
				<form onSumbmit={onSubmit} className={classes.form} noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								autoComplete="name"
								name="userName"
								variant="outlined"
								required
								fullWidth
								id="userName"
								label="ID"
								autoFocus
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								autoComplete="nick"
								name="userNick"
								variant="outlined"
								required
								fullWidth
								id="userNick"
								label="닉네임"
								autoFocus
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="code"
								label="초대 코드"
								name="code"
								autoComplete="code"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="password"
								label="비밀번호"
								type="password"
								id="password"
								autoComplete="current-password"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="password2"
								label="비밀번호 확인"
								type="password"
								id="password2"
								autoComplete="current-password"
							/>
						</Grid>
						<Grid item xs={12}>
							<FormControlLabel
								control={<Checkbox value="allowExtraEmails" color="primary" />}
								label="이걸 체크하면 은유에게 충성을 맹세합니다."
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						가입하기
					</Button>
				</form>
			</div>
			<Box mt={5}>
				<Copyright />
			</Box>
		</Container>
	);
}
