function assignTeams(characters: Character[], numTeams: number, minTanks: number, minHealers: number): Team[][] {
    let solutions = generateInitialSolutions(characters, numTeams, 10); // 生成10个初始解空间

    // 迭代优化解空间
    for (let i = 0; i < maxIterations; i++) {
        // 评估每个解的得分
        solutions = solutions.map(solution => ({
            teams: solution,
            score: evaluate(solution)
        }));

        // 排序并保留得分最高的前半部分解
        solutions.sort((a, b) => b.score - a.score);
        solutions = solutions.slice(0, solutions.length / 2).map(s => s.teams);

        // 对最低得分的部分解做出调整生成新解
        let newSolutions = solutions.map(solution => adjustSolution(solution, characters, numTeams, minTanks, minHealers));
        solutions.push(...newSolutions); // 将调整后的新解添加到解空间
    }

    // 返回最高得分的解
    return solutions[0];
}

// 生成多个初始解
function generateInitialSolutions(characters: Character[], numTeams: number, count: number): Team[][] {
    let solutions: Team[][] = [];
    for (let i = 0; i < count; i++) {
        let initialSolution = initializeTeams(numTeams);
        for (let character of characters) {
            let assignedTeam = getRandomTeam(initialSolution);
            assignedTeam.addCharacter(character);
        }
        solutions.push(initialSolution);
    }
    return solutions;
}

// 调整解的函数，通过交换或重新分配实现
function adjustSolution(solution: Team[], characters: Character[], numTeams: number, minTanks: number, minHealers: number): Team[] {
    // 复制一份解并进行随机调整
    let newSolution = solution.map(team => team.clone());
    // 调整代码，基于不同条件（坦克、治疗数量，group和armor平衡等）修改team内容
    // 例如：选取两个team并交换一些character，或重新分配部分角色
    return newSolution;
}
