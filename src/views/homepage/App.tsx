import React from 'react'
import { Nav } from '../../components/nav/Nav'
import * as Styled from './Styles'
import Icon from '../../icon.png'
import IconJS from '../../assets/javascript-original.svg'
import IconTS from '../../assets/typescript-original.svg'
import IconJava from '../../assets/java-original.svg'
import IconKt from '../../assets/kotlin-original.svg'

export const Slice = ({ children, ...props }: React.PropsWithChildren<{ size: number }>): JSX.Element => (
    <Styled.SliceContainer {...props}>
        {children}
    </Styled.SliceContainer>
)

export const Link = ({ children, ...props}: React.PropsWithChildren<{ url: string }>): JSX.Element => (
    <Styled.Label href={props.url} role="linK" rel="noopener" target="_blank">{children}</Styled.Label>
)

export const Image = ({ ...props }): JSX.Element => (
    <Styled.Icon {...props} />
)

export const Content = ({ children, ...props }: React.PropsWithChildren<{ size:number}>): JSX.Element => (
    <Styled.Content {...props}>
        {children}
    </Styled.Content>
)

const Filler = ({ ...props }: React.PropsWithChildren<{ height: number }>): JSX.Element => (
    <Styled.Filler {...props} />
)

export const Logo = (): JSX.Element => (
    <Styled.LogoFrame>
        <Styled.Image src={Icon} alt="that silly fish icon" title="a silly fish" />
    </Styled.LogoFrame>
)

export const App = (): JSX.Element => (
    <Styled.Container>
        <Nav />
        <Content size={24}>
            <Slice size={4}>
                <Logo />

                <Filler height={24} />

                <Styled.Title>ABOUT ME</Styled.Title>
                <Styled.Text>Hey there, I enjoy writing lines of text in some text editor..</Styled.Text>

                <Filler height={40} />

                <Styled.Title>SKILLS</Styled.Title>
                <Content size={0}>
                    <Image src={IconJS} alt="JavaScript" />
                    <Image src={IconTS} alt="TypeScript" />
                    <Image src={IconJava} alt="Java" />
                    <Image src={IconKt} alt="Kotlin Multiplatform" />
                </Content>
            </Slice>
            <Slice size={8}>
                <Styled.Title>PROJECTS</Styled.Title>

                <Filler height={12} />

                <Link url="https://github.com/supergrecko/RiotQuest">RiotQuest</Link>
                <Styled.Text>I enjoy messing with the Riot Games API so I built an open-source wrapper</Styled.Text>

                <Filler height={24} />

                <Link url="https://github.com/supergrecko/superlang">Superlang</Link>
                <Styled.Text>A dummy programming language, tree-walk interpreter written in Kotlin</Styled.Text>

                <Filler height={24} />

                <Link url="https://github.com/supergrecko/superlang">LeagueConnect</Link>
                <Styled.Text>A basic node module for interacting with the League Client APIs</Styled.Text>

                <Filler height={24} />

                <Link url="https://github.com/supergrecko/StackVM">StackVM</Link>
                <Styled.Text>Stack based virtual machine for basic arithmetic operations with Kotlin Native</Styled.Text>
            </Slice>
        </Content>
    </Styled.Container>
)