import React from 'react' 
import { render, screen } from '@testing-library/react'


import DayCard from '../components/DayCard'



describe("Get data from URL", () => {
    it("must display the with values", () => {
        render(<DayCard />)
        expect(screen.getAllByDisplayValue(/data weather/i)).toBeTruthy()
    })
})

