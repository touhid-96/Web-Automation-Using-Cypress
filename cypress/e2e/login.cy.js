import LoginPage from "../pages/loginPage"

describe("Login functionality", () => {
	const loginPage = new LoginPage()
	it("Valid Login", () => {
		loginPage.KuraLogin()
	})
})
