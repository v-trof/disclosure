import { ChainingContainer } from './ChainingContainer'
import { di1 } from './di'
import { Container } from './types'

interface FinalConfig {
    bla: number
    lol: object
    blaf: number
    blag: number
    blagsignle: number
    kek: () => void
}

const final1 = di1<FinalConfig>()

const bla10 = final1(['bla'], (kek) => {
    console.warn('bla10 called')
    const wow = kek + 10
    return wow
})

const bla20 = final1(['bla'], (kek) => {
    const wow = kek + 20
    return wow
})

const blaStr = final1(['lol'], () => {
    return 'str'
})

const c2 = new ChainingContainer()
    .bind('bla').toValue('wow')
    .bind('bla').toValue(15)
    .bind('lol').toValue({
        kek: 10,
        pek: 40
    })
    .bind('kek').toValue(() => 255)

const moduleB = <T extends object>(
    container: ChainingContainer<T>
) => container
    .bind('blag').toFactory(bla10)
    .bind('blagsignle').toFactory(bla10).asSignleton()
    .bind('blaf').toFactory(bla20)

const moduleС = <T extends object>(
    container: ChainingContainer<T>
) => container.bind('blaf').toFactory(bla10)

const f2: Container<FinalConfig> = moduleB(c2)

const val21 = f2.get('lol')
const val22 = f2.get('bla')
const val23 = f2.get('kek')
const val24 = f2.get('blag')
const val25 = f2.get('blaf')

const val242 = f2.get('blag')

const val24s1 = f2.get('blagsignle')
const val24s2 = f2.get('blagsignle')
const val24s3 = f2.get('blagsignle')

// tslint:disable-next-line:no-console
console.log(val21, val22, val23, val24, val242, val25, val24s1, val24s2, val24s3)
