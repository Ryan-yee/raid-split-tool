function mutateTeams(teams: Team[], mutationRate: number): void {
    for (const team of teams) {
        for (const character of team.characters) {
            if (Math.random() < mutationRate) {
                const targetTeam = teams[Math.floor(Math.random() * teams.length)];
                // 将 character 从当前 team 转移到 targetTeam 中
                transferCharacter(team, targetTeam, character);
            }
        }
    }
}

function transferCharacter(sourceTeam: Team, targetTeam: Team, character: Character): void {
    sourceTeam.characters = sourceTeam.characters.filter((char) => char !== character);
    targetTeam.characters.push(character);
}
