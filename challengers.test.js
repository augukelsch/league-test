const axios = require("axios");

describe("Challengers", () => {
  it("should return tier", async () => {
    const { data } = await axios.get(
      "https://br1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5",
      {
        headers: {
          "X-Riot-Token": "RGAPI-5289ff1b-0b99-475b-a1a5-349fb72cf7a2",
        },
      }
    );
    expect(data.tier).toBe("CHALLENGER");

  });
  it("queue type", async () => {
    const { data } = await axios.get(
      "https://br1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5",
      {
        headers: {
          "X-Riot-Token": "RGAPI-5289ff1b-0b99-475b-a1a5-349fb72cf7a2",
        },
      }
    );
    expect(data.queue).toBe("RANKED_SOLO_5x5");

  });
  it("should return league entries", async () => {
      const { data } = await axios.get(
        "https://br1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5",
        {
          headers: {
            "X-Riot-Token": "RGAPI-5289ff1b-0b99-475b-a1a5-349fb72cf7a2",
          },
        }
      );
      for (let i = 0; i < data.entries.length; i++) {
      console.log(data.entries[i].summonerName);
      }
      expect(data.entries.length).toBe(200)
      expect(data.entries.length).toBeLessThan(201)
      expect(data.entries.length).toBeGreaterThan(199)
  })
 })