const StatBar = ({ name, value }: { name: string; value: number }) => {
    // Variables:
    //   Base: The base stat value obtained from the PokeAPI.
    //   IV: Individual Value (0-31). You'll need to provide this.
    //   EV: Effort Value (0-252 per stat, max 510 total). You'll need to provide this.
    //   Level: The Pokémon's level (1-100). You'll need to provide this.
    //   Nature: A multiplier based on the Pokémon's nature (1.1 for a beneficial nature, 0.9 for a hindering nature, 1.0 for a neutral nature). You'll need to provide this.

    // Formulas for calculating stats:
    //   HP: 
    //     HP = floor(0.01 * (2 * Base + IV + floor(0.25 * EV)) * Level) + Level + 10
    //   Other Stats (Attack, Defense, Special Attack, Special Defense, Speed):
    //     Stat = (floor(0.01 * (2 * Base + IV + floor(0.25 * EV)) * Level) + 5) * Nature
    const calcHP = (baseStat: number, ivHP: number, evHP: number, level: number): number => {
        if (ivHP == -1)
            ivHP = Math.floor(Math.random() * 32)
        if (evHP == -1)
            evHP = Math.floor(Math.random() * 253)
        if (level == -1)
            level = Math.floor(Math.random() * 101)
        return Math.floor(0.01 * (2 * baseStat + ivHP + Math.floor(0.25 * evHP)) * level) + level + 10;
    }

    // For other stats
    const calcStats = (baseStat: number, ivStat: number, evStat: number = 20, level: number = 10, nature: number): number => {
        if (ivStat == -1)
            ivStat = Math.floor(Math.random() * 32)
        if (evStat == -1)
            evStat = Math.floor(Math.random() * 253)
        if (level == -1)
            level = Math.floor(Math.random() * 101)
        return (Math.floor(0.01 * (2 * baseStat + ivStat + Math.floor(0.25 * evStat)) * level) + 5) * nature
    }

    return (
        <div>
            <h1>{name}</h1>
            <progress value={name.toLowerCase() == "hp" ? calcHP(value, -1, -1, -1) : calcStats(value, -1, -1, -1, 1.0)} max={250}></progress>
        </div>
    )
}

export default StatBar