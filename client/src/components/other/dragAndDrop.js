import React, { useState, useCallback, useRef, useEffect } from 'react'
import Backend from 'react-dnd-html5-backend'
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import update from 'immutability-helper'
import { Grid } from '@material-ui/core'

const containerStyle = {
    width: '100%',
}



const DragAndDrop = ({ data, addComp, CardComp, events }) => (
    <DndProvider backend={Backend}>
        <Container data={data} addComp={addComp} CardComp={CardComp} events={events} />
    </DndProvider>
)


const Container = ({ data, addComp, CardComp, events }) => {
    {
        const [cards, setCards] = useState(data);
        const moveCard = useCallback(
            (dragIndex, hoverIndex) => {
                const dragCard = cards[dragIndex]
                setCards(
                    update(cards, {
                        $splice: [
                            [dragIndex, 1],
                            [hoverIndex, 0, dragCard],
                        ],
                    }),
                )
            },
            [cards],
        )
        useEffect(() => {
            setCards(data)
        }, [data, data.length])
        const renderCard = (card = {}, index) => {
            return (
                <Card
                    key={card.position || card.name}
                    index={index}
                    id={card.position}
                    data={card}
                    datas={cards}
                    moveCard={moveCard}
                    CardComp={CardComp}
                    events={events}
                />
            )
        }
        return (
            <>
                <Grid xs={12} container item style={containerStyle}>
                    {cards && cards.map((card, i) => renderCard(card, i))}
                    {addComp}
                </Grid>
            </>
        )
    }
}

const ItemTypes = { CARD: 'card', }
const Card = (params) => {
    const { id, data, datas, index, moveCard, CardComp, events } = params;
    const ref = useRef(null)
    const [, drop] = useDrop({
        accept: ItemTypes.CARD,
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index
            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return
            }
            // Determine rectangle on screen
            const hoverBoundingRect = ref.current.getBoundingClientRect()
            // Get vertical middle
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

            // Get horizontal middle
            const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;

            // Determine mouse position
            const clientOffset = monitor.getClientOffset();

            // Get pixels to the top
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;

            // Get pixels to the left
            const hoverClientX = clientOffset.x - hoverBoundingRect.left;

            const upwards = dragIndex > hoverIndex && hoverClientY > hoverMiddleY;
            const downwards = dragIndex < hoverIndex && hoverClientY < hoverMiddleY;
            const leftwards = dragIndex > hoverIndex && hoverClientX > hoverMiddleX;
            const rightwards = dragIndex < hoverIndex && hoverClientX < hoverMiddleX;

            if (upwards && (leftwards || rightwards)) {
                return;
            }

            if (downwards && (leftwards || rightwards)) {
                return;
            }
            // Time to actually perform the action
            moveCard(dragIndex, hoverIndex)
            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            item.index = hoverIndex;
        },
    })
    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.CARD, id, index },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult()
            if (item && dropResult && events.handleDrop)
                events.handleDrop(datas)
        },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    })
    const opacity = isDragging ? 0 : 1
    drag(drop(ref));
    return (
        <Grid ref={ref} container item style={{ opacity }} xs={12} sm={6} md={3}>
            <CardComp data={data} events={events} />
        </Grid>
    )
}
export default DragAndDrop