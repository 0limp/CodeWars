function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return [laLigaGoals, copaDelReyGoals, championsLeagueGoals].reduce((a, i) => a + i)
}
