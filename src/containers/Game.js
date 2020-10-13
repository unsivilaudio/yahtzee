import React, { Component } from 'react';
import Dice from '../components/Dice';
import ScoreTable from '../components/ScoreTable';
import '../assets/stylesheets/Game.css';

const NUM_DICE = 5;
const NUM_ROLLS = 3;

class Game extends Component {
    state = {
        dice: Array.from({ length: NUM_DICE }),
        locked: Array(NUM_DICE).fill(false),
        rollsLeft: NUM_ROLLS,
        scores: {
            ones: undefined,
            twos: undefined,
            threes: undefined,
            fours: undefined,
            fives: undefined,
            sixes: undefined,
            threeOfKind: undefined,
            fourOfKind: undefined,
            fullHouse: undefined,
            smallStraight: undefined,
            largeStraight: undefined,
            yahtzee: undefined,
            chance: undefined,
        },
    };

    roll = e => {
        // roll dice whose indexes are in reroll
        this.setState(prevState => ({
            dice: prevState.dice.map((d, i) =>
                prevState.locked[i] ? d : Math.ceil(Math.random() * 6)
            ),
            locked:
                prevState.rollsLeft > 1
                    ? prevState.locked
                    : Array(NUM_DICE).fill(true),
            rollsLeft: prevState.rollsLeft - 1,
        }));
    };

    toggleLocked = idx => {
        // toggle whether idx is in locked or not
        this.setState(prevState => ({
            locked: [
                ...prevState.locked.slice(0, idx),
                !prevState.locked[idx],
                ...prevState.locked.slice(idx + 1),
            ],
        }));
    };

    doScore = (rulename, ruleFn) => {
        // evaluate this ruleFn with the dice and score this rulename
        this.setState(prevState => ({
            scores: {
                ...prevState.scores,
                [rulename]: ruleFn(this.state.dice),
            },
            rollsLeft: NUM_ROLLS,
            locked: Array(NUM_DICE).fill(false),
        }));
        this.roll();
    };

    render() {
        return (
            <div className='Game'>
                <header className='Game-header'>
                    <h1 className='App-title'>Yahtzee!</h1>

                    <section className='Game-dice-section'>
                        <Dice
                            dice={this.state.dice}
                            locked={this.state.locked}
                            handleClick={this.toggleLocked}
                        />
                        <div className='Game-button-wrapper'>
                            <button
                                className='Game-reroll'
                                disabled={this.state.locked.every(x => x)}
                                onClick={this.roll}>
                                {this.state.rollsLeft} Rerolls Left
                            </button>
                        </div>
                    </section>
                </header>
                <ScoreTable doScore={this.doScore} scores={this.state.scores} />
            </div>
        );
    }
}

export default Game;
