const my_user = {
    "name": "shreya",
    "people": {
        "builder": {
            // TODO: be able to customize style for every identity. kinda like arc
            "today": [
                // list of things for every day
                {"intention": "do something", "date": "blah", "done": "", "reflection": ""} // search by date.
                // if done, highlight intention in color (eg purple)
                // reflection as dropdown
            ],
            "goals": [
                {"goal": "blah", "completion_date": "blah", "achieved": "dunno"},
            ],
            "feeds": [
                // list of feeds related to being this person
                // TODO: can i include links to open apps?
            ],
            "roots": [
                // list of reasons why
            ]
            // TODO: custom elements, but only private (don't want other people to run your code! security)
        },
        "mathematician": {
            "goals": [
                {"goal":"do something", "completion_date": "blah",}
            ],

        },
        "writer": {
            "goals": [
                {"goal":"do something", "date": "blah",}
            ],

        }
    }
}

export default my_user