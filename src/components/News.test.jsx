import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import News from "./News";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest"

describe("News", () => {

    it("shows title", () => {
        render(<News title="world"/>)
        expect(screen.getByText("world")).toBeInTheDocument()
    })

    it("fetches the api data", async() => {
        
        const category = "world"

        const mockResponse = {
            section: "World News",
            status: "OK",
            results: [
            { 
                title: "Story",
                abstract: "Story" 
            }
            ],
        }

        globalThis.fetch = vi.fn(() => 
            Promise.resolve({
                json: () => Promise.resolve(mockResponse)
            })
        )
        render(<News category="world"/>)

        expect(globalThis.fetch).toHaveBeenCalledTimes(1)
        expect(globalThis.fetch).toHaveBeenCalledWith(
            expect.objectContaining({
                href: `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${import.meta.env.VITE_API_KEY}`
            })
        )
    })

})