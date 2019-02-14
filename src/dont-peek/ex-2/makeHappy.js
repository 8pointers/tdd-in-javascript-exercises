const makeHappy = ({ name, ...rest }) => ({ name: `${name} :)`, ...rest });

export default makeHappy;
