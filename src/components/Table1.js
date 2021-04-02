import React,{useState} from 'react'
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import SearchIcon from '@material-ui/icons/Search';
import Select from 'react-select'
import options from './options'

import '../css/table.css'

const Table1 = ({ data }) => {
    const [option, setOption] = useState('')
    const [search,setSearch] = useState('')

    const searchChange = (e) => {
        setSearch(e.target.value)
        console.log(search)
    }

    const handleChange = (selectOption) => {
        setOption(selectOption)
        console.log(option)
    }

    return (
        <div className='wrapper'>
            <div className='table-cont'>
                <div className='table-left'>
                    <h1>FPO list</h1>
                </div>
                <div className='table-right'>
                    <label for="select">Sort By:</label>
                    <Select name='select' onChange={handleChange} className='select' options={options} />
                    <div className='table-search'>
                        <input type="text" placeholder='Search' onChange={searchChange} />
                        <div className='search-icon'>
                            <SearchIcon  />
                            </div>
                    </div>
                    <button type="sumbit"><strong>Add FPO</strong></button>

                </div>
            </div>
        
        <div className='tables'>
    <Paper>
      <Table>
        <TableHead >
          <TableRow className='table-head'>
            <TableCell>FPO Name</TableCell>
            <TableCell>Contact Person Name</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Members</TableCell>
            <TableCell>BOD</TableCell>
            <TableCell>Staffs</TableCell>
            <TableCell>Action</TableCell>
                            
                            
          </TableRow>
        </TableHead>
        <tbody>
            {data.map(row => (
            <TableRow key={row.id}>
                  <TableCell>{row.fpo}</TableCell>
                    <TableCell>
                        <div className='cpo-cont'>
                            <img alt='img' src={row.image} />{row.name}
                        </div>
                    </TableCell>
                  <TableCell>{row.location}</TableCell>
                  <TableCell className='center-text'>{row.members}</TableCell>
                  <TableCell className='center-text'>{row.bod}</TableCell>
                  <TableCell className='center-text'>{row.staffs}</TableCell>
                  <TableCell>
                      <div className='action'>
                          <VisibilityIcon />
                          <EditIcon className='edit' />
                      </div>
                  </TableCell>
                    </TableRow>
          ))}
        </tbody>
      </Table>
    </Paper>
            </div>
            </div>
    )
}

export default Table1
