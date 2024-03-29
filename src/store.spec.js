import store from "./store"

describe("Shopping list store", () => {
  /**
   * TESTING DEFAULT VALUES
   *
   * Tests if store.items array is
   * empty as default
   */

  test("should check if store items array is empty as default", () => {
    expect(store.state.items).toEqual([])
  })

  /**
   * TESTING MUTATIONS
   *
   * Mocking different entries to test
   * different mutations on the
   * store items array
   */

  describe("mutations", () => {
    test("should check if the mock entry was successfully recorded", () => {
      let mockEntry = { text: "Milk", done: false }
      let state = { items: [] }

      store.mutations.record(state, mockEntry)

      expect(state.items).toEqual([mockEntry])
    })

    test("should check if the 'done' mock entry attribute was sucessfully completed", () => {
      let mockEntry = { text: "Milk", done: false }
      let state = { items: [mockEntry] }

      store.mutations.completed(state, mockEntry)

      expect(state.items[0].done).toBeTruthy()
    })

    test("should check if the mock entry was successfully removed", () => {
      let mockEntry = { text: "Milk", done: false }
      let state = { items: [mockEntry] }

      store.mutations.remove(state, mockEntry)

      expect(state.items.length).toBe(0)
    })
  })
})
