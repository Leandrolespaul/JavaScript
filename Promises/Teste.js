class Player {
    constructor(name, life) {
        this.name = name
        this.life = life
        
        
    }

}


const player = new Player('Jason', 7000)

const marrogar = new Player('Lord Marrowgar', 500)
const leidy = new Player('Lady Deathwhisper', 600)
const barco = new Player(' Gunship Battle', 600, )
const db = new Player('Deathbringer Saurfang', 700)
const fester = new Player('Festergut', 800)
const rotface = new Player('Rotface', 800)
const professor = new Player('Professor Putricide', 800)
const prince = new Player('Prince', 900)
const bloodQueen = new Player(' Blood-Queen Lana thel', 750 )
const val = new Player('Valithria Dreamwalker', 800)
const sindra = new Player('Sindragosa', 900)
const lk = new Player('Lich King', 1000)

const bosses = [marrogar, leidy, db, fester, rotface, professor,  prince, bloodQueen, val, sindra, lk]

function startBattle(player) {
    console.log('Player: ' + player.name)

    for (boss of bosses) {
        console.log('Iniciando batalha contra o boss ' + boss.name)
        while (true) {
            console.log('Vida do boss ' + boss.name + ': ' + boss.life)
            console.log('Vida do player ' + player.name + ': ' + player.life)
            console.log('Iniciando ataque contra o boss ' + boss.name)
            const bossDamage = damage()
            boss.life = boss.life - bossDamage
            console.log('O ataque causou ' + bossDamage + ' de dano ao boss ' + boss.name)
            console.log('O boss tem ' + boss.life + ' de vida.')
            if (boss.life <= 0) {
                console.log('Você derrotou o ' + boss.name)
                break
            }

            console.log('Iniciando ataque contra o player ' + player.name)
            const playerDamage = damage()
            player.life = player.life - playerDamage
            console.log('O ataque causou ' + playerDamage + ' de dano ao player ' + player.name)
            console.log('O player tem ' + player.life + ' de vida.')
            if (player.life <= 0) {
                console.log('Você foi derrotado por ' + boss.name)
                break
            }
        }
        if (player.life <= 0) {
            console.log('Game Over')
            break
        }
    }
    if (player.life > 0) console.log('Você completou a Masmorra.')
}

// function rand(min, max) {
//     min *= 1000
//     max *= 1000
//     return Math.floor(Math.random() * (max - min) + min)
// }


function damage() {
    const min = 100
    const max = 700
    return Math.floor(Math.random() * (max - min) + min)
}

startBattle(player)



// let i = 0
// while (i <= 100) {
//     console.log('oi ' + i)
//     i++
// }


// function esperaAi(mensagem, tempo, damage) {
//     // retorno a promise
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             resolve(mensagem)
//         }, tempo)



//     })

// }

// async function boss() {
//     try {
//         const boss1 = await esperaAi('Você derrotou Marrogar', rand(1, 5), damage(100, 1000))
//         console.log(boss1)

//         const boss2 = await esperaAi('Você derrotou Leidy', rand(1, 5), damage(100, 1000))
//         console.log(boss2)

//         const boss3 = await esperaAi('Você derrotou Db', rand(1, 5), damage(100, 1000))
//         console.log(boss3)

//         const boss4 = await esperaAi('Você derrotou Gordos', rand(1, 5), damage(100, 1000))
//         console.log(boss4)

//         const boss5 = await esperaAi('Você derrotou Prince', rand(1, 5), damage(100, 1000))
//         console.log(boss5)

//         const final = await esperaAi('Parabéns! Você completou a masmorra!')
//         console.log(final)
//     } catch (e) {
//         console.log(e, 'Faltou boss')
//     }

// }
// boss()

