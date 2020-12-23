import { ListGroup, ListGroupItem, Button } from 'reactstrap'
import './Lists.css'
import DeleteIcon from '@material-ui/icons/Delete';
import Zoom from 'react-reveal/Zoom';

const Lists = ({ todo, index, handleDeleteTask }) => {
    return(
        <div>
            <Zoom left>
                <ListGroup classNae="App-list-group">
                    <ListGroupItem className="App-list" index={index}>
                        {todo} &nbsp;
                        <DeleteIcon
                            className="App-delete-icon"
                            onClick={() => handleDeleteTask(index)}
                        />
                    </ListGroupItem>
                </ListGroup>
            </Zoom>
        </div>
    )
}

export default Lists;