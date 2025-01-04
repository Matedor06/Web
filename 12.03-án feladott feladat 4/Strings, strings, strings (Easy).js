Boolean.prototype.toString = function toStringBool() {
    return `${this.valueOf()}`;
  };
  Number.prototype.toString = function toStringNumber() {
    return `${this.valueOf()}`;
  };
  Array.prototype.toString = function toStringArray() {
    let values = this.valueOf()
    if(values.length > 0)
    {
    let result = `[${values[0]}`
    for (let i = 1; i < values.length; i++)
    {
        result += `, ${values[i]}`
    }
    result += `]`;
    return result;
    }
else
{
    return `[]`;
}
    
  };
  