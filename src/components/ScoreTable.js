import React from 'react';

import RuleRow from './RuleRow';
import '../assets/stylesheets/ScoreTable.css';
import {
    ones,
    twos,
    threes,
    fours,
    fives,
    sixes,
    threeOfKind,
    fourOfKind,
    fullHouse,
    smallStraight,
    largeStraight,
    yahtzee,
    chance,
} from '../utils/Rules';

const scoreTable = props => {
    const { scores, doScore } = props;

    return (
        <div className='ScoreTable'>
            <section className='ScoreTable-section'>
                <h2>Upper</h2>
                <table cellSpacing='0'>
                    <tbody>
                        <RuleRow
                            name='Ones'
                            score={
                                scores.ones === undefined
                                    ? '1 point per 1'
                                    : scores.ones
                            }
                            doScore={evt =>
                                props.rolling
                                    ? null
                                    : doScore('ones', ones.evalRoll)
                            }
                            enabled={!props.disabledRules.includes('ones')}
                        />
                        <RuleRow
                            name='Twos'
                            score={
                                scores.twos === undefined
                                    ? '2 points per 2'
                                    : scores.twos
                            }
                            doScore={evt =>
                                props.rolling
                                    ? null
                                    : doScore('twos', twos.evalRoll)
                            }
                            enabled={!props.disabledRules.includes('twos')}
                        />
                        <RuleRow
                            name='Threes'
                            score={
                                scores.threes === undefined
                                    ? '3 points per 3'
                                    : scores.threes
                            }
                            doScore={evt =>
                                props.rolling
                                    ? null
                                    : doScore('threes', threes.evalRoll)
                            }
                            enabled={!props.disabledRules.includes('threes')}
                        />
                        <RuleRow
                            name='Fours'
                            score={
                                scores.fours === undefined
                                    ? '4 points per 4'
                                    : scores.fours
                            }
                            doScore={evt =>
                                props.rolling
                                    ? null
                                    : doScore('fours', fours.evalRoll)
                            }
                            enabled={!props.disabledRules.includes('fours')}
                        />
                        <RuleRow
                            name='Fives'
                            score={
                                scores.fives === undefined
                                    ? '5 points per 5'
                                    : scores.fives
                            }
                            doScore={evt =>
                                props.rolling
                                    ? null
                                    : doScore('fives', fives.evalRoll)
                            }
                            enabled={!props.disabledRules.includes('fives')}
                        />
                        <RuleRow
                            name='Sixes'
                            score={
                                scores.sixes === undefined
                                    ? '6 points per 6'
                                    : scores.sixes
                            }
                            doScore={evt =>
                                props.rolling
                                    ? null
                                    : doScore('sixes', sixes.evalRoll)
                            }
                            enabled={!props.disabledRules.includes('sixes')}
                        />
                    </tbody>
                </table>
            </section>
            <section className='ScoreTable-section ScoreTable-section-lower'>
                <h2>Lower</h2>
                <table cellSpacing='0'>
                    <tbody>
                        <RuleRow
                            name='Three of Kind'
                            score={
                                scores.threeOfKind === undefined
                                    ? 'Sum of dice if 3 are the same'
                                    : scores.threeOfKind
                            }
                            doScore={evt =>
                                props.rolling
                                    ? null
                                    : doScore(
                                          'threeOfKind',
                                          threeOfKind.evalRoll
                                      )
                            }
                            enabled={
                                !props.disabledRules.includes('threeOfKind')
                            }
                        />
                        <RuleRow
                            name='Four of Kind'
                            score={
                                scores.fourOfKind === undefined
                                    ? 'Sum of dice if 4 are the same'
                                    : scores.fourOfKind
                            }
                            doScore={evt =>
                                props.rolling
                                    ? null
                                    : doScore('fourOfKind', fourOfKind.evalRoll)
                            }
                            enabled={
                                !props.disabledRules.includes('fourOfKind')
                            }
                        />
                        <RuleRow
                            name='Full House'
                            score={
                                scores.fullHouse === undefined
                                    ? '25 points for a full house'
                                    : scores.fullHouse
                            }
                            doScore={evt =>
                                props.rolling
                                    ? null
                                    : doScore('fullHouse', fullHouse.evalRoll)
                            }
                            enabled={!props.disabledRules.includes('fullHouse')}
                        />
                        <RuleRow
                            name='Small Straight'
                            score={
                                scores.smallStraight === undefined
                                    ? '30 points for a small straight'
                                    : scores.smallStraight
                            }
                            doScore={evt =>
                                props.rolling
                                    ? null
                                    : doScore(
                                          'smallStraight',
                                          smallStraight.evalRoll
                                      )
                            }
                            enabled={
                                !props.disabledRules.includes('smallStraight')
                            }
                        />
                        <RuleRow
                            name='Large Straight'
                            score={
                                scores.largeStraight === undefined
                                    ? '40 points for a large straight'
                                    : scores.largeStraight
                            }
                            doScore={evt =>
                                props.rolling
                                    ? null
                                    : doScore(
                                          'largeStraight',
                                          largeStraight.evalRoll
                                      )
                            }
                            enabled={
                                !props.disabledRules.includes('largeStraight')
                            }
                        />
                        <RuleRow
                            name='Yahtzee'
                            score={
                                scores.yahtzee === undefined
                                    ? '50 points for a yahtzee'
                                    : scores.yahtzee
                            }
                            doScore={evt =>
                                props.rolling
                                    ? null
                                    : doScore('yahtzee', yahtzee.evalRoll)
                            }
                            enabled={!props.disabledRules.includes('yahtzee')}
                        />
                        <RuleRow
                            name='Chance'
                            score={
                                scores.chance === undefined
                                    ? 'Sum of all dice'
                                    : scores.chance
                            }
                            doScore={evt =>
                                props.rolling
                                    ? null
                                    : doScore('chance', chance.evalRoll)
                            }
                            enabled={!props.disabledRules.includes('chance')}
                        />
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default scoreTable;
