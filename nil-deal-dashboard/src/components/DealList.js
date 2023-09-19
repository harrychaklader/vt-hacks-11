import DealInfo from '../deal-info.json';
  
const DealList = () => {
    return (
      <div className="overflow-x-auto rounded-lg border border-gray-200 drop-shadow-md">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-lg">
            <thead className="ltr:text-left rtl:text-right bg-red-950">
            <tr>
                <th className="text-left whitespace-nowrap px-4 py-2 font-bold text-slate-100">Company</th>
                <th className="text-left whitespace-nowrap px-4 py-2 font-bold text-slate-100">Opportunity</th>
                <th className="whitespace-nowrap px-4 py-2 font-bold text-slate-100">Application</th>
            </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
            {
                DealInfo.map((deal, index) => (
                <tr key={ deal.id }>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 font-medium">{ deal.company }</td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{ deal.title }</td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center"><a href={ deal.url } target='_blank' className="text-blue-600">Apply</a></td>
                </tr>
                ))
            }
            </tbody>
        </table>
    </div>
    );
  };

export default DealList;
