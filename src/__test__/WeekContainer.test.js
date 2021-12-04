import React from 'react' 
import { render, screen } from '@testing-library/react'


import WeekContainer from '../components/WeekContainer'



describe("Get data from URL", () => {
    it("must display the data in console", () => {
        render(<WeekContainer />)
        expect(screen.getAllByDisplayValue(/data weather/i)).toBeTruthy()
    })
})


