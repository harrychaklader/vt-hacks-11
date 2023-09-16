import DealInfo from '../deal-info.json';
  
const DealList = () => {
    return (
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-lg">
            <thead className="ltr:text-left rtl:text-right bg-blue-600 text-slate-200">
            <tr>
                <th className="text-left whitespace-nowrap px-4 py-2 font-medium text-gray-900">Company</th>
                <th className="text-left whitespace-nowrap px-4 py-2 font-medium text-gray-900">Opportunity</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Application</th>
            </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
            {
                DealInfo.map((deal, index) => (
                <tr key={ deal.id }>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{ deal.company }</td>
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