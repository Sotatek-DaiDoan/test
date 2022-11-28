import React, { useEffect, useState } from "react";
import { handleRequest } from "Utils";
import { useAppDispatch } from "Hooks";
import Loading from "Components/Elements/Loading";
import ExampleService from "Services/Instances/ExampleService";
import { exampleSliceActions } from "Store/Slices/ExampleSlice";
import { Text } from "@chakra-ui/react";

type Props = {};

const MyProfile: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      setLoading(true);
      const [authRes, authError] = await handleRequest(
        ExampleService.getProfile()
      );

      if (authError) {
        setLoading(false);
        return;
      }
      dispatch(exampleSliceActions.updateExampleSlice({ newValue: "" }));

      setLoading(false);
      setData(authRes!!.data.data);
    })();
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Text color="#FFFFFF" align="center">
        Profile
      </Text>
      {data}
    </div>
  );
};

export default MyProfile;
