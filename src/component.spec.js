import Vue from "vue/dist/vue.common"
import Component from "./component"

describe("Shopping list component", () => {
  let $mounted

  beforeEach(() => {
    $mounted = new Vue(Component).$mount()
  })

  /**
   * HTML DOM VERIFICATION
   *
   * Using different snapshots to check
   * and test the output of rendered HTML
   */

  test("should make shopping-list component match snapshot dom", () => {
    let $html = $mounted.$el.outerHTML

    /**
     * Checks for component snapshot #1
     */

    expect($html).toMatchSnapshot()

    /**
     * Checks if the first li class
     * element is set as 'done'
     */

    $mounted.items[1].done = true

    /**
     * Checks for component snapshot #2
     */

    Vue.nextTick(() => {
      $html = $mounted.$el.outerHTML
      expect($html).toMatchSnapshot()
    })
  })

  /**
   * TESTING EVENTS ON HTML DOM
   *
   * Verifying if the click event is
   * correctly set on the button elements
   *
   * Testing if the click event is calling the complete() method,
   * to assert the result of that call at the same time
   */

  test("should check click event and set it to true", () => {
    let lis = $mounted.$el.querySelectorAll("li")
    let button = lis[1].querySelector("button")

    let customEvent = new Event("click")
    button.dispatchEvent(customEvent)

    expect($mounted.items[1].done).toBeTruthy()
  })
})
