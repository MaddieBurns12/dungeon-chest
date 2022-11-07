import React from 'react';
import { useState } from 'react';
import Select from 'react-select';

export default function Creation() {

    const [name, setName] = useState('Hello');


  return (
    <div className="w-fit h-fit bg- shadow-lg rounded-lg overflow-hidden my-4 bg-silver">
    <div>
        <input type="text" 
            name="name" 
            className=" px-4 py-2 border-b-2 border-gray-400 "
            label="Character Name"
            placeholder="Character Name"
            value = {name}
            required >
        </input>

        <label for="level">Select Level</label>
        <select name="level"id="level">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option>16</option>
            <option>17</option>
            <option>18</option>
            <option>19</option>
            <option>20</option>
           
        </select>
    </div>
    </div>
  )
}
