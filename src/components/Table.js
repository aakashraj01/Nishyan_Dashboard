import React from "react";

const tableData = [
  {
    orderId: 281209,
    refundDate: "7 July, 2023",
    transactionfees: "₹1,278.23",
    orderAmount: "₹22",
  },
  {
    orderId: 281209,
    refundDate: "7 July, 2023",
    transactionfees: "₹1,278.23",
    orderAmount: "₹22",
  },
  {
    orderId: 281209,
    refundDate: "7 July, 2023",
    transactionfees: "₹1,278.23",
    orderAmount: "₹22",
  },
  {
    orderId: 281209,
    refundDate: "7 July, 2023",
    transactionfees: "₹1,278.23",
    orderAmount: "₹22",
  },
  {
    orderId: 281209,
    refundDate: "7 July, 2023",
    transactionfees: "₹1,278.23",
    orderAmount: "₹22",
  },
  {
    orderId: 281209,
    refundDate: "7 July, 2023",
    transactionfees: "₹1,278.23",
    orderAmount: "₹22",
  },
  {
    orderId: 281209,
    refundDate: "7 July, 2023",
    transactionfees: "₹1,278.23",
    orderAmount: "₹22",
  },
  {
    orderId: 281209,
    refundDate: "7 July, 2023",
    transactionfees: "₹1,278.23",
    orderAmount: "₹22",
  },
  {
    orderId: 281209,
    refundDate: "7 July, 2023",
    transactionfees: "₹1,278.23",
    orderAmount: "₹22",
  },
  {
    orderId: 281209,
    refundDate: "7 July, 2023",
    transactionfees: "₹1,278.23",
    orderAmount: "₹22",
  },
  {
    orderId: 281209,
    refundDate: "7 July, 2023",
    transactionfees: "₹1,278.23",
    orderAmount: "₹22",
  },
  {
    orderId: 281209,
    refundDate: "7 July, 2023",
    transactionfees: "₹1,278.23",
    orderAmount: "₹22",
  },
];

const TableFilters = () => {
  return (
    <section className="flex justify-between">
      <aside className="flex w-fit space-x-2 py-1.5 px-4 items-center border border-[#D9D9D9] rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <g clipPath="url(#clip0_68207_6198)">
            <path
              d="M6.8 12.0301C3.9328 12.0301 1.6 9.69143 1.6 6.81704C1.6 3.94266 3.9328 1.60401 6.8 1.60401C9.6672 1.60401 12 3.94266 12 6.81704C12 9.69143 9.6672 12.0301 6.8 12.0301ZM12.2792 10.8375C13.1056 9.70827 13.6 8.3216 13.6 6.81704C13.6 3.05805 10.5496 0 6.8 0C3.0504 0 0 3.05805 0 6.81704C0 10.576 3.0504 13.6341 6.8 13.6341C8.4728 13.6341 10.0048 13.0222 11.1896 12.0132L14.0032 14.8339C14.1592 14.9903 14.364 15.0689 14.5688 15.0689C14.7736 15.0689 14.9784 14.9903 15.1344 14.8339C15.4472 14.5203 15.4472 14.0134 15.1344 13.6999L12.2792 10.8375Z"
              fill="#808080"
            />
          </g>
          <defs>
            <clipPath id="clip0_68207_6198">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <input
          type="search"
          className="bg-white outline-none"
          placeholder="Search by order ID..."
        />
      </aside>
      <aside className="flex items-center space-x-4">
        <span className="flex items-center space-x-2.5 px-3 py-1.5 border rounded border-[#D9D9D9] shadow-sm hover:cursor-pointer">
          <span>Sort</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.62496 9.93424C1.83324 9.72596 2.17093 9.72596 2.37921 9.93424L4.64295 12.198L6.90669 9.93424C7.11497 9.72596 7.45266 9.72596 7.66094 9.93424C7.86922 10.1425 7.86922 10.4802 7.66094 10.6885L5.02007 13.3294C4.81179 13.5376 4.47411 13.5376 4.26583 13.3294L1.62496 10.6885C1.41668 10.4802 1.41668 10.1425 1.62496 9.93424Z"
              fill="#4D4D4D"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.6429 2.51564C4.93746 2.51564 5.17624 2.75442 5.17624 3.04897L5.17624 12.9522C5.17624 13.2468 4.93746 13.4856 4.6429 13.4856C4.34835 13.4856 4.10957 13.2468 4.10957 12.9522L4.10957 3.04897C4.10957 2.75442 4.34835 2.51564 4.6429 2.51564Z"
              fill="#4D4D4D"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.3792 6.06695C14.1709 6.27523 13.8332 6.27523 13.6249 6.06695L11.3612 3.8032L9.09745 6.06695C8.88917 6.27523 8.55149 6.27523 8.34321 6.06695C8.13493 5.85867 8.13493 5.52098 8.34321 5.3127L10.9841 2.67183C11.1924 2.46356 11.53 2.46356 11.7383 2.67183L14.3792 5.3127C14.5875 5.52098 14.5875 5.85867 14.3792 6.06695Z"
              fill="#4D4D4D"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.3612 13.4855C11.0667 13.4855 10.8279 13.2468 10.8279 12.9522L10.8279 3.04896C10.8279 2.75441 11.0667 2.51563 11.3612 2.51563C11.6558 2.51563 11.8946 2.75441 11.8946 3.04896L11.8946 12.9522C11.8946 13.2468 11.6558 13.4855 11.3612 13.4855Z"
              fill="#4D4D4D"
            />
          </svg>
        </span>
        <aside className="border border-[#D9D9D9] p-2 rounded hover:cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M17.9993 11.9414C18.371 11.9414 18.6811 12.2102 18.7435 12.5968L18.75 12.7L18.7495 16.2321C18.7495 17.5585 17.7164 18.655 16.3813 18.7448L16.2153 18.75L3.77794 18.7499C2.44615 18.7499 1.34529 17.7208 1.25525 16.391L1.25 16.2258V12.6863C1.25 12.2749 1.58596 11.9414 2.00027 11.9414C2.37194 11.9414 2.68197 12.2102 2.74442 12.5968L2.75092 12.7L2.75044 16.2321C2.75044 16.7555 3.14596 17.2013 3.65248 17.2534L3.76695 17.2599L16.2217 17.2602C16.7449 17.2602 17.1902 16.8642 17.2423 16.3577L17.2489 16.2429L17.2492 12.6863C17.2492 12.2749 17.585 11.9414 17.9993 11.9414ZM10.0121 1.25C10.3715 1.25038 10.6815 1.51921 10.744 1.90576L10.7505 2.00892L10.7512 10.8297L13.9124 7.67494C14.1433 7.44469 14.4923 7.39342 14.7961 7.54761L14.9083 7.61495L14.9846 7.68297C15.2334 7.92976 15.2646 8.33058 15.0409 8.65049L14.9652 8.73721L10.5142 13.1745L10.4327 13.2409L10.3271 13.3035L10.2368 13.3399L10.155 13.3617L10.0754 13.374L10.0133 13.3765L9.89007 13.3697L9.78548 13.3471L9.70291 13.3166L9.6007 13.2643L9.54241 13.2224L9.4569 13.1479L5.02399 8.726C4.73169 8.43447 4.73275 7.96287 5.02636 7.67264C5.28648 7.41551 5.69029 7.38633 6.01149 7.60986L6.09848 7.68534L9.25064 10.8296L9.24964 1.9952C9.24964 1.61868 9.53272 1.30251 9.90546 1.25619L10.0121 1.25Z"
              fill="#4D4D4D"
            />
          </svg>
        </aside>
      </aside>
    </section>
  );
};

const TableCardItem = ({
  orderId,
  refundDate,
  transactionfees,
  orderAmount,
  isLastItem,
}) => {
  const borderClass = isLastItem ? "" : "border-b";

  return (
    <tr className={`${borderClass}`}>
      <td className="text-[#146EB4] py-3.5 px-3 text-sm leading-5 font-medium">
        #{orderId}
      </td>
      <td className="text-text py-3.5 px-3 text-sm leading-5 font-medium">
        {refundDate}
      </td>
      <td className="text-text py-3.5 px-3 text-sm leading-5 font-medium text-right">
        {transactionfees}
      </td>
      <td className="text-text py-3.5 px-3 text-sm leading-5 font-medium text-right">
        {orderAmount}
      </td>
    </tr>
  );
};

const Table = () => {
  return (
    <div
      className="bg-white border border-white rounded-lg p-3 space-y-3"
      style={{ boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)" }}
    >
      <TableFilters />
      <table className="w-full text-left border-collapse">
        <thead className="bg-[#F2F2F2] rounded-md">
          <tr className="table-headers">
            <th className="text-text py-3 px-3 text-sm w-100">Order ID</th>
            <th className="text-text py-3 px-3 border-[#F2F2F2] text-sm flex  items-center gap-x-1">
              Order date
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
              >
                <path
                  d="M3.43025 6.23409L0.606918 2.3286C0.548707 2.24507 0.517907 2.15037 0.517581 2.05392C0.517255 1.95746 0.547415 1.86262 0.60506 1.77882C0.662705 1.69502 0.745826 1.62519 0.846154 1.57627C0.946481 1.52736 1.06052 1.50106 1.17692 1.5H6.82358C6.93998 1.50106 7.05402 1.52736 7.15435 1.57627C7.25468 1.62519 7.3378 1.69502 7.39544 1.77882C7.45309 1.86262 7.48325 1.95746 7.48292 2.05392C7.4826 2.15037 7.45179 2.24507 7.39358 2.3286L4.57025 6.23409C4.51083 6.31526 4.42716 6.38238 4.32732 6.42895C4.22747 6.47553 4.11483 6.5 4.00025 6.5C3.88567 6.5 3.77303 6.47553 3.67319 6.42895C3.57334 6.38238 3.48967 6.31526 3.43025 6.23409Z"
                  fill="#4D4D4D"
                />
              </svg>
            </th>
            <th className="text-text py-3 px-3 text-sm text-right">
              Order amount
            </th>
            <th className="text-text py-3 px-3 text-sm text-right flex items-center justify-end gap-x-1">
              Transaction fees
              <svg
                width="14"
                height="20"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_5730_2522)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.77783 10.1808C7.77783 10.6103 7.42968 10.9584 7.00022 10.9584C6.57076 10.9584 6.22261 10.6103 6.22261 10.1808C6.22261 9.75137 6.57076 9.40322 7.00022 9.40322C7.42968 9.40322 7.77783 9.75137 7.77783 10.1808Z"
                    fill="#4D4D4D"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.12724 3.40771C6.54406 3.23506 7.00271 3.18988 7.4452 3.2779C7.88769 3.36592 8.29414 3.58317 8.61315 3.90219C8.93217 4.2212 9.14942 4.62765 9.23744 5.07014C9.32546 5.51263 9.28028 5.97128 9.10763 6.3881C8.93498 6.80491 8.64261 7.16117 8.26749 7.41182C8.02339 7.57492 7.75139 7.68854 7.46685 7.74801V7.84799C7.46685 8.10573 7.25791 8.31466 7.00018 8.31466C6.74245 8.31466 6.53351 8.10573 6.53351 7.84799V7.32959C6.53351 7.20582 6.58268 7.08712 6.6702 6.9996C6.75771 6.91209 6.87641 6.86292 7.00018 6.86292C7.26674 6.86292 7.52732 6.78388 7.74895 6.63578C7.97059 6.48769 8.14334 6.2772 8.24535 6.03093C8.34735 5.78466 8.37404 5.51367 8.32204 5.25223C8.27004 4.99079 8.14168 4.75064 7.95319 4.56215C7.7647 4.37366 7.52455 4.2453 7.26311 4.1933C7.00167 4.14129 6.73068 4.16799 6.48441 4.26999C6.23814 4.372 6.02765 4.54475 5.87956 4.76639C5.73146 4.98802 5.65242 5.2486 5.65242 5.51516C5.65242 5.77289 5.44349 5.98183 5.18575 5.98183C4.92802 5.98183 4.71909 5.77289 4.71909 5.51516C4.71909 5.064 4.85287 4.62298 5.10352 4.24785C5.35417 3.87273 5.71043 3.58036 6.12724 3.40771Z"
                    fill="#4D4D4D"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.0002 1.63353C4.03627 1.63353 1.63353 4.03627 1.63353 7.0002C1.63353 9.96412 4.03627 12.3669 7.0002 12.3669C9.96412 12.3669 12.3669 9.96412 12.3669 7.0002C12.3669 4.03627 9.96412 1.63353 7.0002 1.63353ZM0.700195 7.0002C0.700195 3.5208 3.5208 0.700195 7.0002 0.700195C10.4796 0.700195 13.3002 3.5208 13.3002 7.0002C13.3002 10.4796 10.4796 13.3002 7.0002 13.3002C3.5208 13.3002 0.700195 10.4796 0.700195 7.0002Z"
                    fill="#4D4D4D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5730_2522">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <TableCardItem
              key={index}
              {...item}
              isLastItem={index === tableData.length - 1}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
