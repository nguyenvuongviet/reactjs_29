import { useSelector } from "react-redux";
import Seat from "./Seat";

export default function HomePage() {
  const { listState, listSeatSelected } = useSelector(
    (state) => state.bookingTicketReducer
  );

  const renderRowIndex = () => {
    const data = listState[0];
    return (
      <tr className="flex justify-center gap-2">
        <td className="w-10"></td>
        {data.danhSachGhe.map((item) => (
          <td
            key={item.soGhe}
            className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-800 rounded-md font-bold"
          >
            {item.soGhe}
          </td>
        ))}
      </tr>
    );
  };

  const renderListSeat = () => {
    return listState.map((row, index) => {
      if (index === 0) return null;

      return (
        <tr key={row.hang} className="flex justify-center gap-2">
          <td className="w-10 h-10 flex items-center justify-center bg-gray-300 text-gray-800 rounded-md font-bold">
            {row.hang}
          </td>
          {row.danhSachGhe.map((seat) => (
            <td key={seat.soGhe} className="w-10 flex justify-center">
              <Seat seat={seat} />
            </td>
          ))}
        </tr>
      );
    });
  };

  const totalPrice = () => {
    return listSeatSelected.reduce((total, seat) => total + seat.gia, 0);
  };

  return (
    <div
      style={{
        backgroundImage: `url('./images/bgmovie.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative container mx-auto p-6 flex flex-row space-x-8">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-yellow-400 mb-4 text-center">
            🎟️ Booking Ticket Movie
          </h1>
          <div className="w-full flex justify-center mb-6">
            <div className="w-4/5 bg-gray-700 text-white text-center rounded-t-lg shadow-md py-2">
              <span className="text-lg font-bold">Màn hình</span>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="table-auto mx-auto">
              <tbody className="space-y-2">
                {renderRowIndex()}
                {renderListSeat()}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-center items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="inline-block w-6 h-6 bg-green-500 rounded-md"></span>
              <span className="text-white">Ghế trống</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="inline-block w-6 h-6 bg-yellow-500 rounded-md"></span>
              <span className="text-white">Đang chọn</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="inline-block w-6 h-6 bg-red-500 rounded-md"></span>
              <span className="text-white">Đã đặt</span>
            </div>
          </div>
        </div>
        <div className="w-1/3 bg-gray-800 bg-opacity-90 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            Danh sách ghế
          </h2>
          {listSeatSelected.length > 0 ? (
            listSeatSelected.map((seat) => (
              <div
                key={seat.soGhe}
                className="p-4 mb-4 flex justify-between items-center bg-gray-700 text-white rounded-lg border border-gray-600 shadow-lg"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-yellow-400">
                    Seat:
                  </span>
                  <span className="text-lg">{seat.soGhe}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-yellow-400">
                    Price:
                  </span>
                  <span className="text-lg">${seat.gia}</span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white text-center bg-gray-700 p-4 rounded-lg shadow-lg">
              Chưa chọn ghế nào
            </p>
          )}

          <div className="text-lg font-bold text-white mt-4">
            Tổng: <span className="text-yellow-400">${totalPrice()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
