using DatabaseFirst.Models;

namespace DatabaseFirst.Services
{
    public interface IPositionsService
    {
        Task<IEnumerable<Position>> GetPositionsList();
    }
}
