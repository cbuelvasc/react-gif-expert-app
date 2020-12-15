import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('Test hook useFetchGifs', () => {
    test('Hook useFetchGifs should return initial state', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Dragon Ball'));
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('Hook useFetchGifs should return an array of images and loading in false', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Dragon Ball'));
        await waitForNextUpdate();
        const { data, loading } = result.current;
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });
});
