import React, { useEffect, useState } from "react";
import { handleRequest } from "Utils";
import { useAppDispatch } from "Hooks";
import Loading from "Components/Elements/Loading";
import ExampleService from "Services/Instances/ExampleService";
import { exampleSliceActions } from "Store/Slices/ExampleSlice";
import { Button, HStack, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import ROUTES from "Routers/Constants/Routes";

type Props = {};

const MyProfile: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const history = useHistory();
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
        dispatch(
          exampleSliceActions.updateExampleSlice({ newValue: "newValue" })
        );
        return;
      }
      dispatch(
        exampleSliceActions.updateExampleSlice({ newValue: "newValue" })
      );

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
      <HStack w={"100%"} justifyContent="center" mt={5}>
        <Button onClick={() => history.push(ROUTES.HOME)}>HOME</Button>
      </HStack>
      {data}
    </div>
  );
};

export default MyProfile;
