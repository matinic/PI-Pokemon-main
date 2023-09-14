import { useDispatch, useSelector } from "react-redux"
import { actualPage, filterAction, selectedOptions } from "../../redux/actions"
import style from './FilterBar.module.css'
import { useEffect } from "react"
import { getTypes } from "../../redux/actions"
const {validate} = require('uuid')

export default function FilterBar({context}){

const dispatch = useDispatch()

const {
    types,
    filterOptions:{[context]:options},
    original:{[context]:inmutable}
} = useSelector(state => state)

const Filter = function(st){
    this.st = st
}
Filter.prototype.origin = function (value){
    if(value === 'created') this.st = this.st.filter(({id}) => validate(id))
}
Filter.prototype.type = function (value){
    if(value !== 'all') this.st = this.st.filter(({types}) => types.includes(value))
}
Filter.prototype.sort = function (value){
    if(value === 'az') this.st = this.st.sort((a,b) => a.name.localeCompare(b.name))
    if(value === 'za') this.st = this.st.sort((a,b) => b.name.localeCompare(a.name))
    if(value === 'MostPW') this.st = this.st.sort((a,b) => b.attack - a.attack)
    if(value === 'LessPW') this.st = this.st.sort((a,b) => a.attack - b.attack)
}

const newFilter = new Filter([...inmutable])

const filterHandler = (e)=>{
    const {name:filter,value:option} = e.target
    dispatch(selectedOptions({context,filter,option}))
    dispatch(actualPage(1,context))
}
useEffect(()=>{
    newFilter.origin(options.origin)
    newFilter.type(options.type)
    newFilter.sort(options.sort)
    dispatch(filterAction(newFilter.st,context))
},[options])

useEffect(()=>
    {if(types.length < 2) dispatch(getTypes())}
,[])

    return(
            <div className={style.filterBar}>

                <label>
                    <p>Filter by Origin</p>
                    <select name = 'origin' onChange={filterHandler} value={options.origin} >
                        <option value="all">all</option>
                        <option value="created">created</option>
                    </select>
                </label>
                
                <label>
                    <p>Filter by Type</p>
                    <select name="type" onChange={filterHandler} value={options.type}>
                        {
                            types?.map((type,index) => <option value={type} key={index} name={'others'}>{type}</option>)
                        } 
                    </select>
                </label>
                    
                <label>
                    <p>Sort</p>
                    <select name="sort" onChange={filterHandler} value={options.sort}>
                        <option>Default</option>
                        <option value="az">A - Z (alphabetic)</option>
                        <option value="za">Z - A (alphabetic)</option> 
                        <option value="MostPW">Most Powerful</option>
                        <option value="LessPW">Less Powerful</option>
                    </select>
                </label>
                
            </div>
    )
}

