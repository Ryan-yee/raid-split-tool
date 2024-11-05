function optimizeTeamsWithSimulatedAnnealing(
    teams: Team[],
    constraints: Constraints,
    initialTemperature: number,
    coolingRate: number
): Team[] {
    let temperature = initialTemperature;
    let currentScore = evaluateTeams(teams);

    while (temperature > 1) {
        const mutatedTeams = JSON.parse(JSON.stringify(teams)); // 深拷贝
        mutateTeams(mutatedTeams, 0.1); // 使用一定的变异率

        const newScore = evaluateTeams(mutatedTeams);
        const scoreDifference = newScore - currentScore;

        // 如果新解更优，接受它；如果更差，根据温度和差值决定是否接受
        if (scoreDifference > 0 || Math.exp(scoreDifference / temperature) > Math.random()) {
            teams = mutatedTeams;
            currentScore = newScore;
        }

        // 降低温度
        temperature *= coolingRate;
    }

    return teams;
}

function evaluateTeams(teams: Team[]): number {
    // 根据约束条件计算团队的分数，分数越高表示解越优
    // 具体实现根据分团需求，例如考虑平均 ilevel、group 和 armor type 的平衡性
    return 0; // 示例实现
}
