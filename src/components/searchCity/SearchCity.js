
import './searchCity.scss';

const SearchCity = ({onChangeCity}) => {

    const city = [
        {
            "id": '472045',
            "name": "Voronezh",
        },
        {
            "id": '524901',
            "name": "Moscow",
        },
        {
            "id": '498698',
            "name": "Saransk",
        },
        {
            "id": '491422',
            "name": "Sochi",
        },
        {
            "id": '511196',
            "name": "Perm",
        },
        {
            "id": '524305',
            "name": "Murmansk",
        },
        {
            "id": '551487',
            "name": "Kazan",
        },
        {
            "id": '2013348',
            "name": "Vladivostok",
        },
        {
            "id": '499099',
            "name": "Samara",
        },
        {
            "id": '472757',
            "name": "Volgograd",
        },
        {
            "id": '662598',
            "name": "Vladimir",
        },
        {
            "id": '501175',
            "name": "Rostov-na-Donu",
        },
        {
            "id": '542420',
            "name": "Krasnodar",
        },
        {
            "id": '1502026',
            "name": "Krasnoyarsk",
        },
        {
            "id": '484646',
            "name": "Tambov",
        },
    ]

    return (
        <select name='town' className="search_city" onChange={onChangeCity}>
        {city.map(item => <option
          value={item.name}
          key={item.id}>
          {item.name}</option>)}
      </select>
    )
}

export default SearchCity;

