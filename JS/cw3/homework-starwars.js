const films = require("./sw-films.json");
const planets = require("./sw-planets.json");
const peoples = require("./sw-people.json");
const starships = require("./sw-starships.json");

// count sum of all starships cost from episodes 4-6
console.log(
  "Sum of all starships cost from episodes 4 - 6 is: " +
    sumAllStarshipsCostFromEpisodes(4, 6)
);
function sumAllStarshipsCostFromEpisodes(startEp, endEp) {
  let sum = 0;
  films.forEach((f) => {
    if (startEp <= f.episode_id && f.episode_id <= endEp) {
      f.starships.forEach((url) => {
        // console.log('f', f.episode_id, 'url', url)
        starships.forEach((s) => {
          if (url === s.url) {
            if (s.cost_in_credits !== "unknown") {
              sum += parseFloat(s.cost_in_credits);
            }
          }
        });
      });
    }
  });

  return sum;
}

// find the fastest starship you can afford having 8500000 credits
console.log(
  "Fastest ship I can get for up to 8500000 is: " +
    getFastestShipFor(8500000).name
);
function getFastestShipFor(money) {
  let ship;
  starships.forEach((s) => {
    if (money === parseFloat(s.cost_in_credits)) {
      ship = s;
    }
  });
  return ship;
}

// find planet name with the lowest difference between the rotation period and orbital period
console.log(
  "Planet name with the lowest difference between the rotation period and orbital period is: " +
    getPlanetNameWithLowestDifference("rotation_period", "orbital_period")
);
function getPlanetNameWithLowestDifference(key1, key2) {
  let planetName;
  let lowest = 999999999;
  planets.forEach((p) => {
    if (p.name === "unknown") {
      // ignoring it
      return;
    }

    const difference = parseFloat(p[key2]) - parseFloat(p[key1]);
    // console.log('low', low)
    if (difference < lowest) {
      planetName = p.name;
      lowest = difference;
    }
  });
  return planetName;
}

// map all starships with crew <= 4 that were created between 10 dec 2014 and 15 dec 2014
console.log(
  "Ships with max crew of 4 created between 10.12.2014 - 12.12.2014 number is: " +
    getCrewShipFrom(4, new Date(2014, 12 - 1, 10), new Date(2014, 12 - 1, 12))
      .length
);

function getCrewShipFrom(maxCrew, dateStart, dateEnd) {
  let ship = [];
  const start = dateStart.getTime();
  const end = dateEnd.getTime();
  // console.log(dateStart, dateEnd)
  starships.forEach((s) => {
    const created = new Date(s.created).getTime();

    if (parseFloat(s.crew) <= maxCrew && start <= created && created <= end) {
      ship.push(s);
    }
  });
  return ship;
}

// create an array of people’s names from episodes 1 and 5 sorted by the diameter of origin planet low to high
console.log(
  "People from ep 1 - 5 sorted by origin planet diameter low to high: " +
    getPeopleSortedByOriginPlanetDiameter(1, 5)
);

function getPeopleSortedByOriginPlanetDiameter(startEp, endEp) {
    let people
    let filmUrl1
    let filmUrl2

    films.forEach((f) => {
        if (f.episode_id === startEp) {
            filmUrl1 = f.url
        }
        if (f.episode_id === endEp) {
            filmUrl2 = f.url
        }
    })

    people = []
    peoples.forEach((p) => {
        if (p.films.indexOf(filmUrl1) === -1) {
            return
        }

        if (p.films.indexOf(filmUrl2) === -1) {
            return
        }

        let diameter
        planets.forEach((pl) => {
            if (p.homeworld === pl.url) {
                diameter = parseFloat(pl.diameter)
            }
        })

        people.push({
            name: p.name,
            diameter: diameter,
            // homeworld: p.homeworld
        })
    })

    people.sort((a, b) => a.diameter - b.diameter)

    //console.log(people)
    return people.map((p) => p.name)
}
