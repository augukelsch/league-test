const axios = require("axios");

describe("Challengers", () => {
  it("should return tier", async () => {
    const { data } = await axios.get(
      "https://br1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5",
      {
        headers: {
          "X-Riot-Token": "RGAPI-22577178-0d27-42b0-8f9b-2de2f3fcffe4",
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
          "X-Riot-Token": "RGAPI-22577178-0d27-42b0-8f9b-2de2f3fcffe4",
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
            "X-Riot-Token": "RGAPI-22577178-0d27-42b0-8f9b-2de2f3fcffe4",
          },
        }
      );
      for (let i = 0; i < data.entries.length; i++) {
      console.log(data.entries[i].summonerName);
      }
      expect(data.entries.length).toBe(200)
      })

  it("should return summoner data by simmilar name", async () => {
    const teste = "psiduck"
    const { data } = await axios.get(
      `https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${teste}`,
      {
        headers: {
          "X-Riot-Token": "RGAPI-22577178-0d27-42b0-8f9b-2de2f3fcffe4",
        },
      }

    );
    expect(data.name).toBe("Psi Duck");
 
  });
  it("should return summoner data by name", async () => {
    const teste = "Psi Duck"
    const { data } = await axios.get(
      `https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${teste}`,
      {
        headers: {
          "X-Riot-Token": "RGAPI-22577178-0d27-42b0-8f9b-2de2f3fcffe4",
        },
      }

    );
    expect(data.name).toBe("Psi Duck");
   });
 })