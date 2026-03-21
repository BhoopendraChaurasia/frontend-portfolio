export const DashboardCard = () => {
    const items = [
        { text: 'Card 1' },
        { text: 'Card 2' },
        { text: 'Card 3' },
        { text: 'Card 4' },
    ]
    return (
        <div className= "flex justify-between" >
        {
            items.map(item => (
                <div key={item.text} className= "m-10 border-1 border rounded-lg p-10 bg-gray-100" >
                { item.text }
                </div>
            ))
        }
        </div>
    )
}