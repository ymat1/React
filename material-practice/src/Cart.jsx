import { useState, useEffect } from "react";
import { Button, TextField, List, ListItem, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AddIcon from "@mui/icons-material/Add";
import ModeNightIcon from "@mui/icons-material/ModeNight";

export default function Cart() {
    // handle user's input
    const [input, setInput] = useState("");
    // handle blank array
    const [list, setList] = useState([]);
    // handle Total value
    const [total, setTotal] = useState(0);

    useEffect(() => {
        return computeTotal();
    }, [list]);

    function handleAddOnClick() {
        const newItem = {
            itemName: input,
            quantity: 1,
            isSelected: false,
        };
        // store newItem
        const newItems = [...list, newItem];
        setList(newItems);
        setInput("");
    }
    // Increment and Decrement
    const handleIncrement = (index) => {
        const incrementItem = [...list];
        // increase quantity by 1
        incrementItem[index].quantity++;
        setList(incrementItem);
    };
    const handleDecrement = (index) => {
        const decrementItem = [...list];
        // decrease quantity by 1
        decrementItem[index].quantity--;
        setList(decrementItem);
    };
    const handleComplete = (index) => {
        const itemTarget = [...list];
        itemTarget[index].isSelected = !itemTarget[index].isSelected;
        setList(itemTarget);
    };
    const computeTotal = () => {
        const calculateTotal = list.reduce((total, item) => {
            return total + item.quantity;
        }, 0);
        setTotal(calculateTotal);
    };
    return (
        <>
            <Typography variant='h3'>
                Sample
            </Typography>
            <TextField id="outlined-basic" label="Add Item" size="small" variant="outlined" value={input} onChange={(e) => setInput(e.target.value)}/>
            <Button variant="contained" size="large" color="secondary" onClick={() => handleAddOnClick()}>
                <AddIcon />
            </Button>
            <List>
                {list.map((item, index) => (
                    <ListItem alignItems="right">
                        <input type="checkbox" onChange={() => handleComplete(index)} />
                        <span style={{ textDecoration: item.isSelected ? "line-through" : "" }}>
                            {item.itemName}
                        </span>
                        <Button onClick={() => handleDecrement(index)}>-</Button>
                        {item.quantity}
                        <Button onClick={() => handleIncrement(index)}>+</Button>
                    </ListItem>
                ))}
                <ListItem>
                    Total: {total}
                </ListItem>
            </List>
        </>
    );
}