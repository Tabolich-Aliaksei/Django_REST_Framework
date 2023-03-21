import React from 'react'

const NoteItem = ({notes}) => {
	return (
		<tr>
			<td> 
				{note.user_name}
			</td>
                        <td> 
                                {note.first_name}
                        </td>
                        <td> 
                                {note.last_name}
                        </td>
                        <td> 
                                {note.email}
                        </td>
		</tr>
	)
}

const NoteList = ({notes}) => {
        return (
                <table>
                        <th> 
                                User_name
                        </th>
                        <th> 
                                First_name
                        </th>
                        <th> 
                                Last_name
                        </th>
                        <th> 
                                Email
                        </th>
			{notes.map((note) => <NoteItem note={note} />)}
                </table>
        )
}

export default NoteList
