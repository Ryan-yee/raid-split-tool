function evaluateTeams(teams: Team[], constraints: Constraints): number {
    let score = 0;

    // 1. 坦克和治疗分配的满足度
    for (const team of teams) {
        if (team.tanks.length >= constraints.minTanks && team.healers.length >= constraints.minHealers) {
            score += 10; // 满足条件加分
        } else {
            score -= 10; // 不满足条件扣分
        }
    }

    // 2. 关键职业覆盖情况
    for (const team of teams) {
        const hasRequiredClasses = constraints.requiredClasses.every((cls) => team.characters.includes(cls));
        if (hasRequiredClasses) {
            score += 5;
        } else {
            score -= 5;
        }
    }

    // 3. Group 和 Armor Type 的均衡性
    const groupBalanceScore = calculateBalanceScore(teams, "group");
    const armorTypeBalanceScore = calculateBalanceScore(teams, "armorType");
    score += groupBalanceScore + armorTypeBalanceScore;

    // 4. 平均装备等级的接近性
    const ilevelBalanceScore = calculateIlevelBalanceScore(teams);
    score += ilevelBalanceScore;

    // 5. 防止重复角色
    const duplicatePenalty = calculateDuplicatePenalty(teams);
    score -= duplicatePenalty;

    return score;
}

function calculateBalanceScore(teams: Team[], attribute: "group" | "armorType"): number {
    // 基于属性的平衡性计算标准差，返回平衡分数
    return 0; // 示例
}

function calculateIlevelBalanceScore(teams: Team[]): number {
    // 计算每个团队的平均 ilevel 差距并返回平衡分数
    return 0; // 示例
}

function calculateDuplicatePenalty(teams: Team[]): number {
    // 检查团队内的重复角色并返回扣分
    return 0; // 示例
}
