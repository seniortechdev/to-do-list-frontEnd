import HomePage from "./HomePage"
import { render, screen } from "@testing-library/react"

describe("Home Page Should", () => {
    it("render with no errors", () => {
        const { getTestById } = render(<HomePage />)

        // Expect title input to be available
        const taskTitle = getTestById("title-input")
        expect(taskTitle).toBeInDocument()
    })
})