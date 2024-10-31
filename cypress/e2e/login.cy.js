import LoginPage from "../pages/loginPage";

describe("User login with valid creds", () => {
	const loginPage = new LoginPage();
	it("Valid Login", () => {
		loginPage.KuraLogin();
	});
});
